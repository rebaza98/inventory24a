import { retornaFechaHoraSistema } from "@/utils/core/utils";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const EmpresaSchema = new Schema({
    razonSocial: {
        type: String,
        unique: true,
        required: [true, "Razón Social es obligatorio"]
    },
    nombreComercial: {
        type: String,
        unique: true,
        required: [true, "Nombre Comercial es obligatorio"]
    },
    representante: {
        type: String,
    },
    siglas: {
        type: String,
        required: [true, "Siglas de empresa es obligatorio"]
    },
    numeroDoc: {
        type: String,
        unique: true,
    },
    docId: {
        codigo: {
            type: Number,
        },
        nombre: {
            type: String,
        }
    },
    email: {
        type: String,
    },
    ubigeo: {
        ubigeoRef: {
            type: Schema.Types.ObjectId,
            ref: 'Ubigeo',
        },
        codigoReniec: {
            type: String,
        },
        codigoInei: {
            type: String,
        },
        ubicacion: {
            type: String,
        },
        desc: {
            type: String,
        },
    },
    telefono: [
        {
            alias: {
                type: String,
            },
            numero: {
                type: String,
            },
            operador: {
                type: String,
            },
        },
    ],
    direccion: [
        {
            ubigeoRef: {
                type: Schema.Types.ObjectId,
                ref: 'Ubigeo',
            },
            alias: {
                type: String,
            },
            codigoReniec: {
                type: String,
            },
            codigoInei: {
                type: String,
            },
            direc: {
                type: String,
            }
        },
    ],
    cuentas: [
        {
            alias: {
                type: String,
            },
            banco: {
                type: String,
            },
            nroCuenta: {
                type: String,
            },
            tipo: {
                type: String,
            },
            cci: {
                type: String,
            },
            titular: {
                type: String,
            },
        },
    ],
    imagenUrl: {
        type: String,
    },
    activo: {
        type: Boolean,
        default: true, // Valor por defecto
    },
    urls: {
        type: [String],
    },
}, { 
    timestamps: { 
        currentTime: () => retornaFechaHoraSistema() // Ajuste para zona horaria GMT-5 (UTC-5)
    } 
});

EmpresaSchema.index({ docId: 1, numeroDoc: 1 }, { unique: true });

const Empresa = mongoose.models.Empresa || mongoose.model('Empresa', EmpresaSchema);

export default Empresa;
