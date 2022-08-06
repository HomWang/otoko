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
    contractAddress: '0x2348c23542a9d48dafbcbf55b322653ac366240f',
    getNowMintPrice: 0,//获取当前的竞品价格
    nowMintTokenId: 0,//获取当前拍卖的竞品ID
    remainingNum: 0,//获取当前剩余未被mint的剩余数量
    // remaining: 0,//获取当前剩余未被mint的剩余数量
    tokenURI: '',//获取NFT的URL
  }),
  getters: {
    getAddress: (state) => state.address
  },
  actions: {
    async updateNowMintPrice(){
      const contract = new web3.eth.Contract(NFTABI, this.contractAddress);
      // 获取当前的竞品价格
      await contract.methods.getNowMintPrice().call().then((v: any) => {
        return v
      }).then((sum: any) => {
        this.getNowMintPrice = sum
      })
    },
    async updateNowMintTokenId(){
      const contract = new web3.eth.Contract(NFTABI, this.contractAddress);
      // 获取当前拍卖的竞品ID
      await contract.methods.nowMintTokenId().call().then((v: any) => {
        return v
      }).then((sum: any) => {
        this.nowMintTokenId = sum
      })
    },
    async updateRemaining(){
      const contract = new web3.eth.Contract(NFTABI, this.contractAddress);
      // 获取当前剩余未被mint的剩余数量
      await contract.methods.remaining().call().then((v: any) => {
        return v
      }).then((sum: any) => {
        this.remainingNum = sum
      })
    },
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
          
          // var contractAddress = "0x2348c23542a9d48dafbcbf55b322653ac366240f";
          // 调用合约
          // const contract = new web3.eth.Contract(NFTABI, this.contractAddress);
          // 获取当前剩余未被mint的剩余数量
          await this.updateRemaining()
          // 获取当前拍卖的竞品ID
          await this.updateNowMintTokenId()
          // 获取当前的竞品价格
          await this.updateNowMintPrice()
          // 获取NFT的URL
          // await contract.methods.tokenURI({_tokenId: this.nowMintTokenId}).call().then((v: any) => {
          //   return v
          // }).then((sum: any) => {
          //   this.tokenURI = sum
          // })

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
