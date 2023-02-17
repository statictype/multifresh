export function WalletConnect() {
  return (
    <form method="post" action="/api/wallet/connect">
      <button type="submit">connect</button>
    </form>
  );
}