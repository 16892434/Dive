import net from "net"

export function isPortInUse(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once("error", (err: NodeJS.ErrnoException) => {
        if (err.code === "EADDRINUSE") {
          resolve(true)
        }
      })
      .once("listening", () => {
        server.close()
        resolve(false)
      })
      .listen(port)
  })
}