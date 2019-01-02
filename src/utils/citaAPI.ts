import AppChain from '@appchain/base'

const appchain = AppChain('ws://121.196.200.225:4337')

// appchain.base.peerCount().then(d => {
//   console.log(d)
// })
// appchain.base.getMetaData().then(d => {
//   console.log(d)
// })

export function getMetaData(){
  return appchain.base.getMetaData()
}

export function newBlockFilter(){
  return appchain.base.newBlockFilter()
}

export function getFilterChanges(filterId:any){
  return appchain.base.getFilterChanges(filterId)
}

export function getBlockByHash(hash:any){
  return appchain.base.getBlockByHash(hash)
}
