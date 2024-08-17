/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   orm.config.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: npatron <npatron@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/08/17 10:56:58 by npatron           #+#    #+#             */
/*   Updated: 2024/08/17 11:57:36 by npatron          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    password: 'mypassword',
    username: 'myuser',
    database: 'postgresql',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
}