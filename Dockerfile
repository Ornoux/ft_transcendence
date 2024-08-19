# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: npatron <npatron@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/08/19 20:25:37 by npatron           #+#    #+#              #
#    Updated: 2024/08/19 22:53:34 by npatron          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM python:3.12-alpine

# Installer les dépendances système nécessaires
RUN apk update && apk upgrade && \
    apk add --no-cache gcc musl-dev postgresql-dev

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de dépendances dans le conteneur
COPY requirements.txt .

# Créer et activer un environnement virtuel
RUN python3 -m venv venv
ENV PATH="/usr/src/app/venv/bin:$PATH"

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du code source dans le conteneur
COPY ./app /usr/src/app

# Définir le point d'entrée pour le conteneur
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



