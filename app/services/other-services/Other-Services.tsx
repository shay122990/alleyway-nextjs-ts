import styles from "./Other-Services.module.css"
interface OtherServicesProps{
    title: string
}
const OtherServices: React.FC<OtherServicesProps> = ({title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default OtherServices
