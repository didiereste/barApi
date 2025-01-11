const EntitySchema = require('typeorm').EntitySchema;

const Role = new EntitySchema({
    name: "Role",
    tableName: "roles",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 100,
            unique: true,
            nullable: false
        },
        description: {
            type: "text",
            nullable: true
        },
        created_at: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP"
        },
        updated_at: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP"
        }
    }
});

module.exports = Role;