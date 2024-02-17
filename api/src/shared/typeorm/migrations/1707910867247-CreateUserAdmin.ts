import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserAdmin1707910867247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.users 
        ("name", email, "password", user_admin )
        VALUES('admin', 'admin@admin.com', '$2a$08$QRfMRkXwHIxNXwdbqWPSCO1mly5O0qGXtGI44OHkRReQ0rK9Wvuxu', true);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM public.users WHERE email = admin@admin.com'`,
    );
  }
}
