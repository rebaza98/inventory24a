import { retornaFechaHoraSistema } from "@/utils/core/utils";
import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const ContadorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del contador es obligatorio"],
        unique: true, // Para evitar duplicados
    },
    valor: {
        type: Number,
        default: 0,
    },
    scope: {
        type: String,
        enum: ['global', 'empresa'], // Define si es un contador global o específico de una empresa
        default: 'global',
    },
    empresaId: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: function() { return this.scope === 'empresa'; } // Requerido solo si el scope es 'empresa'
    },
    activo: {
        type: Boolean,
        default: true,
    },
}, { 
    timestamps: { 
        currentTime: () => retornaFechaHoraSistema() 
    } 
});

const Contador = mongoose.models.Contador || mongoose.model('Contador', ContadorSchema);
export default Contador;
//const Contador = models.Contador || model('Contador', ContadorSchema)
