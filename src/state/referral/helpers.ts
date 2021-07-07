import BigNumber from 'bignumber.js'
import { ReferralResponse} from 'state/types'
import referralAbi from 'config/abi/referral.json'
import {getReferralAddress} from 'utils/addressHelpers'
import { getReferralContract } from 'utils/contractHelpers'

const referralContract = getReferralContract()

/* const getUid = (uid = string): string => {
    return `${uid}`
}

const fetchReferred = { 

}

const fetchReferralLink = {

}

const makeReferralLink = useCallback(asyn () => {
        try {
            const link = `/?ref=${uid}`
        } catch (e) {
            console.error(e)
        }
    },
    [link])

// every time referral link is used  
export const fetchReferral = async (referralAddress: string) : Promise<ReferralResponse> => {
    try {
        const referralData = await referralContract.recordReferral(referralAddress)
        const {
            uid,
            referrer, 
            operator, 
            earning
        }
    } 
} */ 