import { TypeOrmModule} from '@nestjs/typeorm';
import { Configuration } from '../config/config.keys';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ ConfigModule],
        inject: [ ConfigService],
        async useFactory(config: ConfigService){
            return{
                //ssl: true,                                            // SSL Example in Azure
                type: 'mysql',                                          // Type DataBase  
                host: config.get(Configuration.HOST),                   // Server  Database
                port: 3306,                                             // Port the Database
                username: config.get(Configuration.USERNAME),           // User DataBase
                password: config.get(Configuration.PASSWORD),           // Password DataBase
                database: config.get(Configuration.DATABASE),           // Schema
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],     // Entity
                synchronize:false                                       // Create or Update DataBase tables or columns
            } as ConnectionOptions
        }
    })
]
