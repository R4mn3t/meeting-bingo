import React from 'react';

export default function LanguageSwitch()  {
    const changeLanguage = (locale) => {
        window.location.href = `/set-locale/${locale}`;
    };

    return (
        <div>
            <button type="button" className='btn btn-light me-3' onClick={() => changeLanguage('en')}>English</button>
            <button type="button" className='btn btn-light' onClick={() => changeLanguage('de')}>Deutsch</button>
        </div>
    );
}