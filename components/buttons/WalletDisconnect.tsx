export function WalletDisconnect() {
  return (
    <form method="post" action="/api/wallet/disconnect">
      <button type="submit">disconnect</button>
    </form>
  );
}
