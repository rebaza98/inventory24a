import SBreadCrumb from "@/app/components/SBreadCrumb"

//CONSTANTES
const pages = [
  { name: 'Inventario', href: '#', current: false },
  { name: 'Personas', href: '/core/personas', current: true },
]

const minBusqueda = 3

const titulo = "Personas"

const HomePersonas = () => {
  return (
    <>
      <SBreadCrumb pages={pages} titulo={titulo} />
      <div className="bg-gray-200 rounded-lg shadow-md p-4 mt-2 " >
        contenido
      </div>
    </>
    
  )
}

export default HomePersonas
