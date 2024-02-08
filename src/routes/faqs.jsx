
const questions = [
  {
    question: '¿Cómo puedo comprar entradas?',
    answer: 'Puedes comprar entradas en línea a través de nuestro sitio web o en persona en nuestras taquillas.'
  },
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Aceptamos tarjetas de crédito/débito principales y pagos en efectivo en nuestras taquillas.'
  },
  {
    question: '¿Puedo cancelar o cambiar mi reserva?',
    answer: 'La política de cancelación y cambios varía según el evento. Por favor, revisa los términos y condiciones al realizar tu compra.'
  }
]
const Faqs = () => {
  
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>
      <div>
    {questions.map((item, index) => (
       <div key={index}>
       <h3>{item.question}</h3>
       <p>{item.answer}</p>
     </div>
    ))}
  </div>
    </div>
  );
};

export default Faqs;
