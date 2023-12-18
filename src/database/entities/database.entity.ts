import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Database extends Model<Database> {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
      })
      id: string;
    @Column({
        type: DataType.INTEGER,
        // defaultValue: DataType.UUIDV4,
        // primaryKey: true,
      })
      qty: string;

    @Column({
        type: DataType.STRING,
        // defaultValue: DataType.UUIDV4,
        // primaryKey: true,
      })
      price: string;
    

    
}

export default Database;