import React from 'react';
import TSLogo from '../../assets/svg/ts-logo-white.svg';
import t from '../../utils/lang-utils';
import Dropdown from '../Dropdown';
import './index.scss';

const Header = (props: { location: Location }) => (
    <header>
        <section className="container">
            <div className="headerWrapper">
                <div>
                    <h2 className="m-0 d-inline-block logo">
                        <a href="#" title={t('TS_LOGO_ALT_TEXT')}>
                            <img
                                src={TSLogo}
                                alt={t('TS_LOGO_ALT_TEXT')}
                                className="thoughtspotLogo"
                            />
                        </a>
                    </h2>
                    <a className="m-0 d-inline-block docsWrapper" href="?pageid=introduction">{t('DOCS')}</a>
                </div>

                <Dropdown location={props.location} />
            </div>
        </section>
    </header>
);

export default Header;
