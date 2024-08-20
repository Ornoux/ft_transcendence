# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Dockerfile                                         :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: npatron <npatron@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/08/20 18:03:25 by npatron           #+#    #+#              #
#    Updated: 2024/08/20 18:18:43 by npatron          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

FROM postgres:16.4-alpine

RUN apk update && apk upgrade

COPY script/init_postgresql.sh script

CMD ["bash", "script"]