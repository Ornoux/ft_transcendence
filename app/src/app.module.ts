/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.module.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: npatron <npatron@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/17 10:56:44 by npatron           #+#    #+#             */
/*   Updated: 2024/08/17 10:56:47 by npatron          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { config } from './orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
