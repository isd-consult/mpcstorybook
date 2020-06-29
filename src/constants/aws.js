import Auth from '@aws-amplify/auth'
import uuidv1 from 'uuid'
import { LocalStorageUtils } from 'utils/LocalStorageUtils'
import config from '../config'


export const awsConfig = {
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
    },
    API: {
        endpoints: [
            {
                name: "mpc",
                endpoint: config.apiGateway.MPC,
                region: config.apiGateway.REGION,
                custom_header: async () => {
                    let sessid = LocalStorageUtils.loadState('rws-session-id')
                    if (!sessid || sessid==='' || sessid===undefined) {
                        sessid = uuidv1()
                        LocalStorageUtils.saveState('rws-session-id', sessid)
                    }
                    try {
                        const user = await Auth.currentAuthenticatedUser()
                        if (user.username != null){
                            return {
                                'x-rws-token' : user.username,
                                'rws-session-id': sessid
                            }
                        }
                        user['x-rws-token'] = user.id
                        user['rws-session-id'] = sessid
                        return user
                    } catch(e) {
                        return {'rws-session-id': sessid}
                    }
                }
            }
        ]
    }
}
