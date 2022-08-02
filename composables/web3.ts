export async function useWeb3() {
  if (process.client) {
    // 以太坊
    if (window.ethereum) {
      // 使用小狐狸或则Token Pocket
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new window.Web3(window.ethereum)
      const accounts = await web3.eth.getAccounts()
      console.log(JSON.stringify(accounts))
      // commit('setAccount', accounts[0])
      const balance = await web3.eth.getBalance(accounts[0])
      // commit('setEthBalance', balance)
      // commit('setConnected', true)

      window.ethereum.on('accountsChanged', (accounts) => {
        //用户帐户已断开连接
        if (typeof accounts[0] === 'undefined') {
          // commit('setConnected', false)
        }
        // commit('setAccount', accounts[0])
        web3.eth.getBalance(accounts[0]).then((balance) => {
          // commit('setEthBalance', balance)
        })
      })

    } else {
      // commit('setConnected', false)
    }
  }
}