import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();
  return (
    <div className="content__not-found">
        <img src="https://i.postimg.cc/65Y4CsXN/icons8-error-91.png" alt="not-found" />
        <p>Страница не найдена</p>
        <button onClick={()=>navigate('/')}>На главную</button>
    </div>
  )
}

export default NotFoundPage