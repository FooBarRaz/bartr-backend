import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";
import {createConnection} from "typeorm";

@Injectable()
export class ConnectionProvider {
    constructor(private configService: ConfigService) { }

    provide(database: string, entities: any[]){
        return createConnection({
            type: 'postgres',
            host: this.configService.get('BARTR_POSTGRES_HOST'),
            port: this.configService.get('BARTR_POSTGRES_PORT'),
            username: this.configService.get('BARTR_POSTGRES_USERNAME'),
            password: this.configService.get('BARTR_POSTGRES_PASSWORD'),
            database: database,
            entities: entities,
            synchronize: true
        });
    }
}
