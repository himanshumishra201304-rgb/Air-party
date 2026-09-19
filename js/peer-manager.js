// Shared PeerJS helpers
const PEER_CONFIG = {
  // Use public PeerJS cloud. For production, host your own PeerServer.
  // host: '0.peerjs.com',
  // secure: true,
  debug: 1
};

function generateRoomCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function createPeer(id) {
  return new Peer(id, PEER_CONFIG);
}

function send(conn, type, payload = {}) {
  if (conn && conn.open) {
    conn.send({ type, ...payload, t: Date.now() });
  }
}

function broadcast(conns, type, payload = {}) {
  Object.values(conns).forEach(c => send(c, type, payload));
}
