# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: npatron <npatron@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/08/19 20:25:37 by npatron           #+#    #+#              #
#    Updated: 2024/08/20 09:38:07 by npatron          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM python:3.12-alpine

WORKDIR /app 

COPY ./app /app
COPY requirements.txt /app

RUN pip install --no-cache-dir -r /app/requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
