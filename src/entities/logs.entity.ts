import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Logs extends Model<Logs> {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
      })
      id: string;
    @Column({
        type: DataType.STRING,
    })
    path: string;

    @Column({
        type: DataType.STRING,
    })
    response: string;
}

export default Logs;