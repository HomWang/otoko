import { defineStore } from 'pinia'
import NFTABI from '~~/abi/test-abi.json'

export const useWalletStore = defineStore({
  id: 'wallet',
  // 扩展配置
  // persist: {
  //   // 开启缓存
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: 'sessionStorageWallet', // 默认key是上面store的id，可自定义key
  //       // sessionStorage、localStorage、cookie
  //       storage: 'sessionStorage', // 默认是sessionStorage会话存储，可以设置为localStorage本地长存储
  //       paths: ['address', 'ellipsisAccount', 'balance', 'isConnected']
  //     }
  //   ]
  // },
  state: () => ({
    address: '',
    isAddressLoad: false,
    ellipsisAccount: '',
    balance: 0,
    isConnected: false,
    remainingNum: 0,
    contractAddress: '0x495F1eC64467539cAd047629086E3Cd95459E374',
  }),
  getters: {
    getAddress: (state) => state.address
  },
  actions: {
    // setAuthenticated: async function (payload) {
    async useWeb3() {
      if (process.client) {
        // 以太坊
        if (window.ethereum) {
          // 使用小狐狸或则Token Pocket
          await window.ethereum.send('eth_requestAccounts')
          window.web3 = new window.Web3(window.ethereum)
          const accounts = await web3.eth.getAccounts()
          this.isAddressLoad = true
          // console.log(JSON.stringify(accounts))
          this.address = accounts[0]
          this.ellipsisAccount = this.trimmedAccount()
          const balance = await web3.eth.getBalance(accounts[0])
          this.isAddressLoad = false
          this.balance = balance
          this.isConnected = true

          window.ethereum.on('accountsChanged', (accounts) => {
            //用户帐户已断开连接
            if (typeof accounts[0] === 'undefined') {
              this.isConnected = false
            }
            this.isConnected = true
            web3.eth.getBalance(accounts[0]).then((balance) => {
              this.balance = balance
            })
          })
          
          // var contractAddress = "0x495F1eC64467539cAd047629086E3Cd95459E374";
          // 调用合约
          const contract = new web3.eth.Contract(NFTABI, this.contractAddress);
          contract.methods.remaining().call().then((v: any) => {
            // console.log(v)
            // let ret = new BigNumber(v);
            // return parseFloat(ret.dividedBy(Ether)).toFixed(2);
            return v
          }).then((sum: any) => {
            this.remainingNum = sum
          })

        } else {
          this.isConnected = false
        }
      }
    },
    trimmedAccount() {
      let account = this.address
      if (account) {
        return account.substring(0, 6) + '...' + account.substring(account.length - 2, account.length)
      }
      return account
    },
  }
})
