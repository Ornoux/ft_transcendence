/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.service.ts                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: npatron <npatron@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/17 10:57:15 by npatron           #+#    #+#             */
/*   Updated: 2024/08/17 10:57:17 by npatron          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
      return [
      {
          id: 1,
          name: 'Virgile',
      },
    ];
  }
  printSomething() : string {
    return ("Je teste des choses avec Postman");
  }
}
