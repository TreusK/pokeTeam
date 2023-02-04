
function Notification({typeOfNotif, messageHead, messageBody, onNotifClick}) {
  let colors;
  switch(typeOfNotif) {
    case 'positive': colors = 'bg-green-100 border-green-500 text-green-700';
    break;
    case 'warning': colors =  'bg-orange-100 border-orange-500 text-orange-700';
    break;
  }
  return (
    <div className={`max-w-xl mx-auto border-l-4 p-4 select-none cursor-pointer ${colors}`} role="alert" onClick={onNotifClick}>
      <p className="font-bold">{messageHead}</p>
      <p>{messageBody}</p>
    </div>
  )
}

export default Notification