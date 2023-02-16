export const switchs = {
  large: {
    width: "145px",
    height: "67px",
    backgroundColor: "badge.disabled",
    boxShadow: "switch",
    borderRadius: "40px",
    display: "flex",
    alignItems: "center",
    margin: 6,

    div: {
      marginLeft: 2,
      width: "54px",
      height: "54px",
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE5LjkzNzEgMTUuNzA3MUMxOS41NDY2IDE1LjMxNjYgMTguOTEzNCAxNS4zMTY2IDE4LjUyMjkgMTUuNzA3MUwxNS43MDcxIDE4LjUyMjlDMTUuMzE2NiAxOC45MTM0IDE1LjMxNjYgMTkuNTQ2NiAxNS43MDcxIDE5LjkzNzFMMTcuMTYgMjEuMzlMMjEuODA0NyAyNi4xMTI5QzIyLjE4OTYgMjYuNTA0NCAyMi4xODcgMjcuMTMzIDIxLjc5ODggMjcuNTIxMkwxNy4xNiAzMi4xNkwxNS43Mjk4IDMzLjUzMDZDMTUuMzI4IDMzLjkxNTcgMTUuMzE3OSAzNC41NTQ2IDE1LjcwNzIgMzQuOTUyMkwxOC41MjMgMzcuODI3OUMxOC45MTIyIDM4LjIyNTUgMTkuNTUxMiAzOC4yMjg4IDE5Ljk0NDYgMzcuODM1NEwyMS4zOSAzNi4zOUwyNi4xMDcgMzEuNjczQzI2LjQ5OTggMzEuMjgwMiAyNy4xMzc1IDMxLjI4MjkgMjcuNTI3MSAzMS42NzlMMzIuMTYgMzYuMzlMMzMuNTIzMiAzNy44MTI1QzMzLjkxMTEgMzguMjE3MiAzNC41NTU5IDM4LjIyNDEgMzQuOTUyMyAzNy44Mjc3TDM3LjgyNzcgMzQuOTUyM0MzOC4yMjQxIDM0LjU1NTkgMzguMjE3MiAzMy45MTExIDM3LjgxMjUgMzMuNTIzMkwzNi4zOSAzMi4xNkwzMS42NzkgMjcuNTI3MUMzMS4yODI5IDI3LjEzNzUgMzEuMjgwMiAyNi40OTk4IDMxLjY3MyAyNi4xMDdMMzYuMzkgMjEuMzlMMzcuODM1NCAxOS45NDQ2QzM4LjIyODggMTkuNTUxMiAzOC4yMjU1IDE4LjkxMjIgMzcuODI3OSAxOC41MjNMMzQuOTUyMiAxNS43MDcyQzM0LjU1NDYgMTUuMzE3OSAzMy45MTU3IDE1LjMyOCAzMy41MzA2IDE1LjcyOThMMzIuMTYgMTcuMTZMMjcuNTIxMiAyMS43OTg4QzI3LjEzMyAyMi4xODcgMjYuNTA0NCAyMi4xODk2IDI2LjExMjkgMjEuODA0N0wyMS4zOSAxNy4xNkwxOS45MzcxIDE1LjcwNzFaIiBmaWxsPSIjQjRCNEI0Ii8+Cjwvc3ZnPgo=")
          no-repeat center center`,
    },
    "input:checked ~ &": {
      backgroundColor: "badge.active",
      div: {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTQiIHZpZXdCb3g9IjAgMCA1NCA1NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjciIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTM0Ljk1MjIgMTcuNzA3MkMzNC41NTQ2IDE3LjMxNzkgMzMuOTE1NyAxNy4zMjggMzMuNTMwNiAxNy43Mjk4TDMyLjE2IDE5LjE2TDI0LjUxMzkgMjYuODA2MUMyNC4xMjg2IDI3LjE5MTQgMjMuNTA1NyAyNy4xOTczIDIzLjExMzEgMjYuODE5M0wyMS4zOSAyNS4xNkwxOS45MzcxIDIzLjcwNzFDMTkuNTQ2NiAyMy4zMTY2IDE4LjkxMzQgMjMuMzE2NiAxOC41MjI5IDIzLjcwNzFMMTUuNzA3MSAyNi41MjI5QzE1LjMxNjYgMjYuOTEzNCAxNS4zMTY2IDI3LjU0NjYgMTUuNzA3MSAyNy45MzcxTDE3LjE2IDI5LjM5TDIxLjY2IDMzLjg5TDIzLjAyMzIgMzUuMzEyNUMyMy40MTExIDM1LjcxNzIgMjQuMDU1OSAzNS43MjQxIDI0LjQ1MjMgMzUuMzI3N0wyNS44OSAzMy44OUwzNi4zOSAyMy4zOUwzNy44MzU0IDIxLjk0NDZDMzguMjI4OCAyMS41NTEyIDM4LjIyNTUgMjAuOTEyMiAzNy44Mjc5IDIwLjUyM0wzNC45NTIyIDE3LjcwNzJaIiBmaWxsPSIjM0NDMTNCIi8+Cjwvc3ZnPgo=")
          no-repeat center center`,
        marginLeft: 10,
      },
    },
  },
  small: {
    variant: "switchs.large",
    width: "68px",
    height: "32px",
    div: {
      marginLeft: 2,
      width: "26px",
      height: "26px",
      background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTkuODIyMTEgNy43MDcxMUM5LjQzMTU4IDcuMzE2NTggOC43OTg0MiA3LjMxNjU4IDguNDA3ODkgNy43MDcxMUw3LjcwNzExIDguNDA3ODlDNy4zMTY1OCA4Ljc5ODQyIDcuMzE2NTggOS40MzE1OCA3LjcwNzExIDkuODIyMTFMOC4wOCAxMC4xOTVMMTAuMDU0NyAxMi4yMDI5QzEwLjQzOTYgMTIuNTk0NCAxMC40MzcgMTMuMjIzIDEwLjA0ODggMTMuNjExMkw4LjA4IDE1LjU4TDcuNzI5NzkgMTUuOTE1NkM3LjMyODAxIDE2LjMwMDcgNy4zMTc4NSAxNi45Mzk2IDcuNzA3MTggMTcuMzM3Mkw4LjQwNzk3IDE4LjA1MjlDOC43OTcyNCAxOC40NTA1IDkuNDM2MTUgMTguNDUzOCA5LjgyOTU5IDE4LjA2MDRMMTAuMTk1IDE3LjY5NUwxMi4xOTcgMTUuNjkzQzEyLjU4OTggMTUuMzAwMiAxMy4yMjc1IDE1LjMwMjkgMTMuNjE3MSAxNS42OTlMMTUuNTggMTcuNjk1TDE1LjkwODIgMTguMDM3NUMxNi4yOTYxIDE4LjQ0MjIgMTYuOTQwOSAxOC40NDkxIDE3LjMzNzMgMTguMDUyN0wxOC4wNTI3IDE3LjMzNzNDMTguNDQ5MSAxNi45NDA5IDE4LjQ0MjIgMTYuMjk2MSAxOC4wMzc1IDE1LjkwODJMMTcuNjk1IDE1LjU4TDE1LjY5OSAxMy42MTcxQzE1LjMwMjkgMTMuMjI3NSAxNS4zMDAyIDEyLjU4OTggMTUuNjkzIDEyLjE5N0wxNy42OTUgMTAuMTk1TDE4LjA2MDQgOS44Mjk1OUMxOC40NTM4IDkuNDM2MTUgMTguNDUwNSA4Ljc5NzI0IDE4LjA1MjkgOC40MDc5N0wxNy4zMzcyIDcuNzA3MThDMTYuOTM5NiA3LjMxNzg1IDE2LjMwMDcgNy4zMjgwMSAxNS45MTU2IDcuNzI5NzlMMTUuNTggOC4wOEwxMy42MTEyIDEwLjA0ODhDMTMuMjIzIDEwLjQzNyAxMi41OTQ0IDEwLjQzOTYgMTIuMjAyOSAxMC4wNTQ3TDEwLjE5NSA4LjA4TDkuODIyMTEgNy43MDcxMVoiIGZpbGw9IiNCNEI0QjQiLz4KPC9zdmc+Cg==")
          no-repeat center center`,
    },
    "input:checked ~ &": {
      backgroundColor: "badge.active",
      div: {
        background: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iMTMiIGZpbGw9IiNGRkZFRkIiLz4KPHBhdGggZD0iTTE3LjMzNzIgOC43MDcxOEMxNi45Mzk2IDguMzE3ODUgMTYuMzAwNyA4LjMyODAxIDE1LjkxNTYgOC43Mjk3OUwxNS41OCA5LjA4TDEyLjEwMzkgMTIuNTU2MUMxMS43MTg2IDEyLjk0MTQgMTEuMDk1NyAxMi45NDczIDEwLjcwMzEgMTIuNTY5M0wxMC4xOTUgMTIuMDhMOS44MjIxMSAxMS43MDcxQzkuNDMxNTggMTEuMzE2NiA4Ljc5ODQyIDExLjMxNjYgOC40MDc4OSAxMS43MDcxTDcuNzA3MTEgMTIuNDA3OUM3LjMxNjU4IDEyLjc5ODQgNy4zMTY1OCAxMy40MzE2IDcuNzA3MTEgMTMuODIyMUw4LjA4IDE0LjE5NUwxMC4zMyAxNi40NDVMMTAuNjU4MiAxNi43ODc1QzExLjA0NjEgMTcuMTkyMiAxMS42OTA5IDE3LjE5OTEgMTIuMDg3MyAxNi44MDI3TDEyLjQ0NSAxNi40NDVMMTcuNjk1IDExLjE5NUwxOC4wNjA0IDEwLjgyOTZDMTguNDUzOCAxMC40MzYyIDE4LjQ1MDUgOS43OTcyNCAxOC4wNTI5IDkuNDA3OTdMMTcuMzM3MiA4LjcwNzE4WiIgZmlsbD0iIzNDQzEzQiIvPgo8L3N2Zz4K")
          no-repeat center center`,
        marginLeft: 3,
      },
    },
  },
  largeV1: {
    variant: "switchs.large",
    background: "switch.bgV1BigMoon",

    div: {
      marginLeft: 2,
      width: "54px",
      height: "54px",
    },
    "input:checked ~ &": {
      background: "switch.bgV1BigSun",
      div: {
        marginLeft: 10,
      },
    },
  },
  smallV1: {
    variant: "switchs.small",
    background: "switch.bgV1SmallMoon",
    width: "68px",
    height: "32px",

    div: {
      marginLeft: 2,
      width: "26px",
      height: "26px",
    },
    "input:checked ~ &": {
      background: "switch.bgV1SmallSun",
      div: {
        marginLeft: 3,
      },
    },
  },
  largeV2: {
    variant: "switchs.largeV1",
    background: "switch.bgV2BigDark",

    div: {
      marginLeft: 2,
      background: "switch.bgV2BigMoon",
      width: "54px",
      height: "54px",
    },
    "input:checked ~ &": {
      background: "switch.bgV2BigLight",
      div: {
        background: "switch.bgV2BigSun",
        marginLeft: 10,
      },
    },
  },
  smallV2: {
    variant: "switchs.smallV1",
    background: "switch.bgV2SmallDark",
    div: {
      background: "switch.bgV2MoonSmall",
      marginLeft: 1,
      width: "26px",
      height: "26px",
    },
    "input:checked ~ &": {
      background: "switch.bgV2SmallLight",
      div: {
        background: "switch.bgV2SmallSun",
        marginLeft: 3,
      },
    },
  },
};

export default switchs;
