import React, { useContext, useEffect } from 'react'
import { LangueContext } from '../../context/langueContext'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Aos from 'aos'

import 'aos/dist/aos.css'
import './LegalInfo.css'

const LegalInfo = () => {
  const language = useContext(LangueContext)
  const englishMode = language.state.englishMode

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <>
      <Navbar />
      <div className='legal-info'>
        <h1 className='title1'>
          {englishMode ? 'Legal informations' : 'Mentions légales'}
        </h1>
        <p>
          {englishMode
            ? 'This website is the property of The Tourist Office of Tours Val de Loire, 78-82 rue de Bernard Palissy 37042 Tours. The director of the publication of this website is Henri Poignet. Photos from the website are not free of all rights. The website has been created by Raccourci Agency and is hosted by OVH Company.'
            : 'Mentions légales Le présent site est la propriété de L’Office de Tourisme de Tours Val de Loire, 78-82 rue de Bernard Palissy 37 042 Tours. Le directeur de la publication du site web est Henri Poignet. Les photos du site ne sont pas libres de droit. Le site est réalisé par L’office de Tourisme de Tours Val de Loire, développé par Raccourci Agency et hébergé par la société OVH : 2 rue Kellermann – 59100 Roubaix – France.'}
        </p>
        <h2 className='title2'>
          {englishMode
            ? '1. Technical information'
            : '1. Informations techniques'}
        </h2>
        <p>
          {englishMode
            ? 'The user of this Website acknowledges his/her own ability necessary to use and access this Website and agrees that the computer configuration in place does not contain any viruses and that it is in perfect working order. Users confirm they have familiarized themselves with these Terms and Conditions of Use and also confirm their acceptance of them, without reserve. The user admits having been informed that this site is accessible 24 hours a day and 7 days a week, except for the case of absolute necessity, data-processing difficulties, related to the structure of the communication networks or technical difficulties. For reasons of maintenance, the Tourist Office of Tours Val de Loire will be able to stop the site and will endeavour to inform the users beforehand of them. The Tourist Office of Tours Val de Loire does everything possible to deliver available and checked information to its users but may not be held responsible for errors unavailable information or viruses or worms on the website.'
            : 'L’utilisateur du présent site reconnaît disposer de la compétence des moyens nécessaires pour accéder et utiliser à ce site et avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu’elle est en parfait état de fonctionnement. L’utilisateur reconnaît avoir été informé que le présent site est accessible 24 heures sur 24 et 7 jours sur 7, à l’exception des cas de force majeure, difficultés liées à la strucure des réseaux de communication ou difficultés techniques. Pour des raisons de maintenance, L’Office de Tourisme de Tours Val de Loire pourra interrompre le site et s’efforcera d’en avertir préalablement les utilisateurs. L’Office de Tourisme de Tours Val de Loire met tout en oeuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne saurait être tenu responsable des erreurs, d’une absence de disponibilité des informations et/ou de la présence de virus sur son site.'}
        </p>
        <h2 className='title2'>
          {englishMode
            ? '2. Data files ans individual liberties'
            : '2. Loi informatique et libertés'}
        </h2>
        <p>
          {englishMode
            ? 'According to the article 27 of the IT law, the files and the liberties of January 6th, 1978, as a user of this website you are informed that the optional information that you communicate by answering, if you wish it, the present forms on the site, allows us to answer your requests, and is intended for the Tourist Office of Tours Val de Loire, person in charge of the treatment, for purposes of administrative and commercial management as well as, except opposition of your part, for the other companies of the group or for the partner companies of the Tourist Office of Tours Val de Loire. The user is informed that he/she has the right to access and modify his/her personal data by writing to the Tourist Office of Tours Val de Loire.'
            : 'L’utilisateur est informé, conformément à l’article 27 de la loi Informatique, fichiers et libertés du 6 janvier 1978, que les informations facultatives qu’il communique en répondant s’il le souhaite aux formulaires présents sur le site permettent de répondre à sa demande, et sont destinées à L’Office de Tourisme de Tours Val de Loire, responsable du traitement, à des fins de gestion administrative et commerciale ainsi que, sauf opposition de sa part, aux autres sociétés du groupe ou aux sociétés partenaires de L’Office de Tourisme de Tours Val de Loire. L’utilisateur est informé qu’il dispose d’un droit d’accès et de rectification relativement à l’ensemble des données nominatives le concernant en écrivant à L’Office de Tourisme de Tours Val de Loire.'}
        </p>
        <h2 className='title2'>
          {englishMode
            ? '3. Property rights and copyright'
            : `3. Propriété, droit d'auteur`}
        </h2>
        <p>
          {englishMode
            ? 'The general structure, as well as software, texts, images, videos and sound components of the site are the property of the Tourist Office of Tours Val de Loire. Any representation whether in whole or in part of this website by any process whatever without the express authorisation of the Tourist Office of Tours Val de Loire is prohibited and will constitute an infringement of copyright that may be punishable as a criminal offence in accordance with Articles L. 335-2 and following of the Intellectual Property Code. This also applies to databases which appear (if applicable) on the website which are protected by the Code of Intellectual Property European Directive of 11 March 1996, relating to the legal protection of databases and of which the Tourist Office of Tours Val de Loire is the producer. Visitors and users are not authorised to place a link to this Website without the express prior permission of the Tourist Office of Tours Val de Loire.'
            : 'La structure générale, ainsi que les logiciels, textes, images animées ou non sont savoir faire, et tous autres éléments composants le site sont la propriété exclusive de L’Office de Tourisme de Tours Val de Loire. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de L’Office de Tourisme de Tours Val de Loire est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Il en est de même des bases de données figurant sur le site web, qui sont protégées par les dispositions du Code de la propriété intellectuelle portant transposition de la directive européenne du 11 mars 1996 relative à la protection juridique des bases de données, et dont L’Office de Tourisme de Tours Val de Loire est producteur. Tout utilisateur ou visiteur du site web ne peut mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de L’Office de Tourisme de Tours Val de Loire.'}
        </p>
        <p>{englishMode ? 'Photo Credits :' : 'Crédits Photographies :'}</p>
        <ul className='legal-info-list'>
          <li>{englishMode ? '© Sébastien Andréi' : '© Sébastien Andréi'}</li>
          <li>
            {englishMode
              ? '© Anaïs Dutour - Tours Val De Loire Tourism'
              : '© Anaïs Dutour – Tours Val De Loire Tourisme'}
          </li>
          <li>
            {englishMode
              ? '© Aurore Povéda – Tourist Office of Azay Chinon Val de Loire'
              : '© Aurore Povéda – Azay-Chinon Val de Loire'}
          </li>
        </ul>
        <h2 className='title2'>
          {englishMode
            ? '4. Operating condition of the sending of promotional or informative emails'
            : `4. Condition d'utilisation du service d'envoi d'emails promotionnels`}
        </h2>
        <p>
          {englishMode
            ? 'The information and personal data collected of this website forms are processed by computer to keep you up to date on the news, on our offers and our partners’ offers by email. The failure to answer optional questions has no consequences, they only allow us to better know you. We guarantee that all the measures had been taken to ensure the highest level of confidentiality and integrity of the data received and transmitted. In compliance with the law n° 78-17 of January 6th 1978, you have the right to access, modify, rectify or delete all your personal data on file.'
            : 'Les informations et données personnelles recueillies sur les formulaires de ce site font l’objet d’un traitement informatique nous permettant de vous informer de l’actualité, de nos offres commerciales et/ou de celles de nos partenaires par e-mail. L’absence de réponse aux questions facultatives n’a aucune conséquence, elles nous permettent seulement de mieux vous connaître. Nous vous garantissons que tous les moyens sont mis en œuvre pour garantir la plus grande confidentialité et intégrité des données que vous nous confiez. Conformément à la loi n° 78-17 du 6 janvier 1978, vous disposez d’un droit d’accès, de rectification et de suppression des informations vous concernant.'}
        </p>
        <h2 className='title2'>
          {englishMode
            ? 'Trade mark “France Greeters”'
            : 'La marque déposée « France Greeters »'}
        </h2>
        <p>
          {englishMode
            ? 'The trade mark «France Greeters tm», registered at INPI french office, describe a visitor welcome service in a city or a region that follows values defined by the “Global Greeter Network” and a common global operational Charter, named the “France Greeters Charter”. French “Fédération France Greeters” members that use the “France Greeters tm” trade mark and then follow the associated France Greeters charter, have all the freedom to finetune and add items in their own organisation Greeters Charter. Click here to download France Greeters Charter Rel1-3 Oct2014 “Fédération France Greeters” members, when using “France Greeters tm” trade mark, give you a guarantee for a high and consistent service level, from one side to the other of french territory. Our ambition is to bring visitors welcoming level to excellence, everywhere in France in cities and regions.'
            : 'La marque «France Greeters md», enregistrée auprès de l’INPI, caractérise un service d’accueil de visiteurs dans une ville ou une région qui suit les valeurs définies par le « Global Greeter Network » et une charte globale de fonctionnement commune, appelée Charte France Greeters. Les membres de la « Fédération France Greeters » qui utilisent la marque « France Greeters md » et suivent donc la Charte France Greeters associée, ont toute liberté d’en préciser et d’en compléter les termes dans leur propre Charte d’organisation de Greeters. Cliquez pour télécharger la Charte France Greeters Rel1-3 Oct2014 Les membres de la « Fédération France Greeters », en utilisant la marque « France Greeters md« , garantissent une niveau de service élevé et cohérent, d’un point à l’autre du territoire français. Notre ambition est de porter l’accueil des visiteurs à l’excellence, partout en France, dans nos villes et nos terroirs.'}
        </p>
      </div>
      <Footer />
    </>
  )
}

export default LegalInfo
