import { useState } from "react";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Modal from "../../components/Modal/Modal";
import {
  departamentos,
  grados,
  especialidades,
} from "../../data/selectOptions";

const unidades = [
  "BBE I",
  "BPE II",
  "BPE III",
  "BPE IV",
  "HARAS DEL EJERCITO",
  "BPE VI",
  "BPE V",
];

const FormPersonalRegister = ({ formData, handleChange, handleSubmit }) => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [localErrors, setLocalErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.ci) newErrors.ci = "CI es requerido";
    if (!formData.extension) newErrors.extension = "Extensión es requerida";
    if (!formData.carnetMilitar)
      newErrors.carnetMilitar = "Carnet Militar es requerido";
    if (!formData.correo) newErrors.correo = "Correo Electrónico es requerido";
    if (!formData.grado) newErrors.grado = "Grado es requerido";
    if (!formData.especialidad)
      newErrors.especialidad = "Especialidad es requerida";
    if (!formData.nombre) newErrors.nombre = "Nombre es requerido";
    if (!formData.apellidoPaterno)
      newErrors.apellidoPaterno = "Apellido Paterno es requerido";
    if (!formData.apellidoMaterno)
      newErrors.apellidoMaterno = "Apellido Materno es requerido";
    if (!formData.unidad) newErrors.unidad = "Unidad es requerida";
    return newErrors;
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setConfirmModalOpen(true);
    } else {
      setLocalErrors(errors);
    }
  };

  const handleConfirmSubmit = () => {
    setConfirmModalOpen(false);
    handleSubmit();
  };

  const handleCloseModal = () => {
    setConfirmModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleConfirm}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Input
          id="ci"
          label="CI"
          placeholder="Cédula de Identidad"
          value={formData.ci}
          onChange={handleChange}
          error={localErrors.ci}
        />
        <Select
          id="extension"
          label="Extensión"
          options={departamentos}
          value={formData.extension}
          onChange={handleChange}
          error={localErrors.extension}
        />
        <Input
          id="carnetMilitar"
          label="Carnet Militar"
          placeholder="Carnet Militar"
          value={formData.carnetMilitar}
          onChange={handleChange}
          error={localErrors.carnetMilitar}
        />
        <Input
          id="correo"
          label="Correo Electrónico"
          placeholder="Correo Electrónico"
          value={formData.correo}
          onChange={handleChange}
          error={localErrors.correo}
        />
        <Select
          id="grado"
          label="Grado"
          options={grados}
          value={formData.grado}
          onChange={handleChange}
          error={localErrors.grado}
        />
        <Select
          id="especialidad"
          label="Especialidad"
          options={especialidades}
          value={formData.especialidad}
          onChange={handleChange}
          error={localErrors.especialidad}
        />
        <Select
          id="unidad"
          label="Unidad"
          options={unidades}
          value={formData.unidad}
          onChange={handleChange}
          error={localErrors.unidad}
        />
        <Input
          id="nombre"
          label="Nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={localErrors.nombre}
        />
        <Input
          id="apellidoPaterno"
          label="Apellido Paterno"
          placeholder="Apellido Paterno"
          value={formData.apellidoPaterno}
          onChange={handleChange}
          error={localErrors.apellidoPaterno}
        />
        <Input
          id="apellidoMaterno"
          label="Apellido Materno"
          placeholder="Apellido Materno"
          value={formData.apellidoMaterno}
          onChange={handleChange}
          error={localErrors.apellidoMaterno}
        />
        <div className="flex justify-end mt-4 col-span-1 md:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Registrar
          </button>
        </div>
      </form>

      {isConfirmModalOpen && (
        <Modal
          title="Confirmación"
          isOpen={isConfirmModalOpen}
          onClose={handleCloseModal}
        >
          <p>¿Está seguro de que desea registrar esta información?</p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleConfirmSubmit}
            >
              Confirmar
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FormPersonalRegister;
