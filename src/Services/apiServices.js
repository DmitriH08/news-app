const apiUrl = 'https://newsapi.org';

// asyc funktsija rabotaet s Promis / obewanijem
// Promise eto object kotorij izmenitsa v budushem
// U promise est 3 sostojanija
// 1 : pending/ ozidanie  - iznachalnoe sostojanie
// 2 : fulfilled / vipolnennij - esli vse horowo proshlo
// 3 : rejected / otklonennij - esli proizowla oshibka
// Promisi nam nuzni dlja togo chtobi nawe prilozenie moglo dalwe rabotatj ne dozidajas otveta (Promisi eto nekie nevidemmie dannie rezultat kotorih mi videm v Networke)
// Kljuchevoe slovo await mozet ispolzovatsa tolko v async funktsijah 
// async funktsija vipolnjaetsa ne v zavisimosti ot vsego ostalnogo koda
// await priobrazaet object Promise v otvet ot zaprosa
export async function getEverything(data){
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
    });
    return await fetch (`${apiUrl}/v2/everything?${params}`);
}