const EntitySchema = require('typeorm').EntitySchema;

const User = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        email: {
            type: "varchar",
            length: 255,
            unique: true,
            nullable: false
        },
        password: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        username: {
            type: "varchar",
            length: 50,
            unique: true,
            nullable: false
        },
        created_at: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP"
        },
        updated_at: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        },
        role_id: {
            type: "int",
            nullable: false
        }
    },
    relations: {
        role: {
            target: "Role", 
            type: "many-to-one",
            joinColumn: {
                name: "role_id"
            },
            nullable: false
        }
    }
});

module.exports = User;