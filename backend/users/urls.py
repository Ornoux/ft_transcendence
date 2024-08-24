# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    urls.py                                            :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: npatron <npatron@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2024/08/18 15:30:41 by npatron           #+#    #+#              #
#    Updated: 2024/08/24 18:38:19 by npatron          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

from django.urls import path, include

from . import views

urlpatterns = [
    path("", views.index, name="index"),
	path("api/", include('core.api.urls'))
]