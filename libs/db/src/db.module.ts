import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {ConnectionProvider} from "@bartr/db/ConnectionProvider";

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [ConnectionProvider],
    exports: [ConnectionProvider]
})
export class DbModule { }
