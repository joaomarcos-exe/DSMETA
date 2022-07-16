import axios from 'axios';
import { toast } from 'react-toastify';
import notificationIcon from '../../assets/img/notification-icon.svg'
import './styles.css';

type Props ={
  saleId: number;
}
function NotificationButton({saleId}: Props) {
  const handleClick = (saleId: number) =>{
    axios.get(`http://localhost:8080/sales/${saleId}/notification`)
      .then((res)=>{
        toast.info("SMS enviado com sucesso");
      });
  }
    return(
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={notificationIcon} alt="Notificar"/>
      </div>
    )
  }
  
  export default NotificationButton
  