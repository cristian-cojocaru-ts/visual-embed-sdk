import * as mixpanel from 'mixpanel-browser';
import * as auth from './auth';

import { initMixpanel, uploadMixpanelEvent } from './mixpanel-service';

import { AuthType } from './types';

const config = {
    thoughtSpotHost: 'https://10.87.89.232',
    authType: AuthType.None,
};

const MIXPANEL_EVENT = {
    VISUAL_SDK_CALLED_INIT: 'visual-sdk-called-init',
};

describe('Unit test for mixpanel', () => {
    test('initMixpanel', async () => {
        spyOn(mixpanel, 'init');
        spyOn(mixpanel.default, 'track');
        spyOn(auth, 'getSessionInfo').and.returnValue({
            configInfo: {
                mixpanelAccessToken: 'foo',
            },
        });
        initMixpanel(Promise.resolve(), config).then((result) => {
            expect(mixpanel.init).toHaveBeenCalledWith('foo');
            uploadMixpanelEvent(MIXPANEL_EVENT.VISUAL_SDK_CALLED_INIT, {
                authType: config.authType,
                host: config.thoughtSpotHost,
            });
            expect(mixpanel.track).toHaveBeenCalled();
        });
    });
});
