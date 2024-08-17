/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.module.ts                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: npatron <npatron@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/17 10:57:09 by npatron           #+#    #+#             */
/*   Updated: 2024/08/17 10:57:11 by npatron          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
