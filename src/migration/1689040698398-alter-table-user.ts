import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableUser1689040698398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        alter table public.user add unique(cnpj);
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
        `)
    }

}
