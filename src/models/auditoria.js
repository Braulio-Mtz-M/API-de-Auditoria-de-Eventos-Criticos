const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    timestamp: { 
        type: Date, 
        default: Date.now,
        required: true 
    },
    ip: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    action: { 
        type: String,
        required: true
    },
    statusCode: { 
        type: Number,
        required: true
    }
}, { 
    collection: 'audit_logs',
    versionKey: false
});

module.exports = mongoose.model('AuditLog', auditLogSchema);