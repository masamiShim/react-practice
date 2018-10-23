import { RestClient } from '../common/RestClient'
import Const from '../common/Const'

export class SkillRepository {
    private static get URL (): string {
        return Const.ROOT_HOST.concat('skill')
    }

    public static findAll (): any {
        RestClient.get(SkillRepository.URL).then(value => {
            return JSON.parse(value.toString())
        }).catch(reason => {
            console.log(reason)
            return null
        })
    }
}
