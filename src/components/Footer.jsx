import { useLang } from '../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <span className="footer__ghost" aria-hidden="true">STARTRADER</span>
      <div className="container footer__inner">
        <p className="footer__tagline">{t('footer.tagline')}</p>
        <p className="footer__signoff">{t('footer.signoff')}</p>

        <div className="footer__baseline">
          <img className="footer__logo" src="/startrader-logo.svg" alt="STARTRADER" />
        </div>

        <div className="footer__legal">
          <h3 className="footer__legal-title">Risk Warning</h3>
          <p className="footer__legal-text">
            Trading in leveraged derivative products, such as Foreign Exchange
            (Forex) and Contracts for Difference (CFDs), involves a high level of
            risk and may result in losses that exceed your initial deposit. These
            products may not be suitable for all investors. Leverage amplifies both
            potential profits and losses. When trading these instruments, you do not
            own or have any rights to the underlying assets. Past performance is not
            indicative of future results.
          </p>
          <p className="footer__legal-text">
            Before making any investment decisions, you should carefully assess your
            investment objectives, knowledge, experience, and financial situation.
            You should only engage in Forex and CFD trading if you possess sufficient
            knowledge and experience. STARTRADER assumes no liability for any losses
            incurred from trading, and all trading activities are undertaken at your
            own risk.
          </p>
          <p className="footer__legal-text">
            The content provided on this website is for general informational purposes
            only and does not take into account your individual financial
            circumstances, investment goals, or risk tolerance. You should review the
            legal documents available on our website to ensure a full understanding of
            the risks associated with CFD trading. If necessary, seek independent
            advice from qualified professionals before proceeding.
          </p>

          <h3 className="footer__legal-title">Regional Restrictions</h3>
          <p className="footer__legal-text">
            This website is not intended for distribution to, or use by, any person or
            entity who is a citizen or resident of certain jurisdictions, including,
            but not limited to the United States, and jurisdictions listed on the FATF
            “blacklist” or other major global sanctions lists. It is also not intended
            for distribution or use in any jurisdiction where such distribution or use
            would violate local laws or regulations.
          </p>

          <h3 className="footer__legal-title">Regulator Information</h3>
          <p className="footer__legal-text">
            STARTRADER is the brand representing a network of regulated and licensed
            entities across various jurisdictions, each authorised to provide specific
            financial services in compliance with local regulations. Upon
            registration, you will be assigned to the appropriate entity based on your
            location, ensuring that all trading activities are governed by the
            applicable regulatory authority. While the relevant authorities have
            granted securities or investment dealer licenses to the licensees, they do
            not endorse the products or services offered by STARTRADER.
          </p>
          <p className="footer__legal-text">
            STARTRADER Global Financial Consultation &amp; Financial Analysis L.L.C is
            a Category 5 licensee regulated by the Capital Market Authority (CMA) of
            the United Arab Emirates, with License No. 20200000241, authorised to carry
            out regulated activities of Introduction and Promotion in the UAE. Its
            registered office is located at Office 815, Al Manara Tower, Business Bay,
            Dubai, UAE. It is not authorised to provide brokerage services or execute
            client trades.
          </p>
          <p className="footer__legal-text">
            STARTRADER Prime Global Pty Ltd is regulated by the Australian Securities
            and Investments Commission (ASIC), with ACN 156005668 and AFSL No. 421210.
            Its registered office is located at Level 35, 31 Market Street, Sydney, NSW
            2000, Australia.
          </p>
          <p className="footer__legal-text">
            STARTRADER International Pty Ltd is regulated by the Financial Sector
            Conduct Authority (FSCA) of South Africa, with FSP No. 52464 and
            Registration No. 2022/435897/07. Its registered office is located at 18
            Cavendish Road, Claremont, Cape Town, Western Cape, 7708, South Africa.
          </p>
          <p className="footer__legal-text">
            STARTRADER Limited is regulated by the Financial Services Authority (FSA)
            of Seychelles, with License No. SD049 and Registration No. 8427362-1. Its
            registered office is located at Suite 3, Global Village, Jivan’s Complex,
            Mont Fleuri, Mahe, Seychelles.
          </p>
          <p className="footer__legal-text">
            STARTRADER Financial Markets Limited is regulated by the Financial Services
            Commission (FSC) of Mauritius, with Company No. 212229 GBC and License No.
            GB24203371. Its registered office is located at Suite 201, 2nd Floor, The
            Catalyst, 40 Silicon Avenue, Ebene Cybercity, Mauritius.
          </p>
          <p className="footer__legal-text">
            STARTRADER (CY) Limited, registered in the Republic of Cyprus under
            registration number HE421001 with its registered address at 160
            Archiepiskopou Makariou III, 1st Floor, 3026 Limassol, Cyprus. This entity
            does not offer regulated financial products or provide trading services.
          </p>
        </div>
      </div>
    </footer>
  )
}
