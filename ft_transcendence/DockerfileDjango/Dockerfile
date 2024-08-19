# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: npatron <npatron@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/08/19 17:59:52 by npatron           #+#    #+#              #
#    Updated: 2024/08/19 18:44:50 by npatron          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM alpine:latest

RUN apk update && apk upgrade && \
	apk add --no-cache python3 py3-pip && \
	python -m pip install Django && \
	touch requirements.txt
	
COPY requirements/requirements.txt requirements.txt

RUN	