import { Header } from "../../componets/header";

export function SettingsPage ()
{
return (
    <> 
        <Header />
        <p>SettingsPage Page</p> 
        <ul>
            <li><a href="/labels">Labels </a></li>
            <li><a href="/mechanics">Mechanics </a></li>
            <li><a href="/services">Services </a></li>
            <li><a href="/service-parts">Services parts</a></li>
        </ul>
    </>

)


}