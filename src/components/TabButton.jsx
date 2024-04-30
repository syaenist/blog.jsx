export default function TabButton({children, onselect ,isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');


  return ( 
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onselect}>{children}</button>
    </li>
 );
}