import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriandoCurso1612076350338 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(
        new Table({
            
            name: 'curso',

            columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
            },

            {
                name: 'name',
                type: 'varchar',
            },

            {
                name: 'duracao',
                type: 'integer'
            }, 

            {
                name: 'createdAt',
                type: 'timestamp',
                default: 'now()',

            }, 

            {
                name: 'updatedAt',
                type: 'timestamp',
                default: 'now()',

            }
        ],
       })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('curso');
    }

}
