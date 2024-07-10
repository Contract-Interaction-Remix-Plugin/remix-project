'use strict'
import { ViewPlugin } from '@remixproject/engine-web';
import React from 'react' // eslint-disable-line
import { gitState, GitUI } from '@remix-ui/git';
import * as packageJson from '../../../../../package.json'

const profile = {
  name: 'dgit',
  displayName: 'Git',
  desciption: 'Git plugin for Remix',
  methods: ['pull', 'track', 'diff', 'clone', 'open'],
  events: [''],
  version: packageJson.version,
  maintainedBy: 'Remix',
  permission: true,
  description: 'Use this plugin to interact with your git repositories',
  location: 'sidePanel',
  icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjAwNyA4LjIyMTY4QzIxLjAxMDUgNy41Mjc5MiAyMC44MjA3IDYuODQ2ODkgMjAuNDU5MSA2LjI1NDg1QzIwLjA5NzQgNS42NjI4MSAxOS41NzggNS4xODMxNSAxOC45NTkyIDQuODY5NTdDMTguMzQwMyA0LjU1NiAxNy42NDYzIDQuNDIwOTEgMTYuOTU1MSA0LjQ3OTQxQzE2LjI2MzcgNC41Mzc5MyAxNS42MDI1IDQuNzg3NzMgMTUuMDQ1IDUuMjAwODVDMTQuNDg3NyA1LjYxMzk3IDE0LjA1NjMgNi4xNzQwOSAxMy43OTkzIDYuODE4NUMxMy41NDI0IDcuNDYyOSAxMy40Njk3IDguMTY2MTMgMTMuNTg5OCA4Ljg0OTQ0QzEzLjcwOTkgOS41MzI3NCAxNC4wMTc3IDEwLjE2OTIgMTQuNDc4OSAxMC42ODc0QzE0Ljk0MDIgMTEuMjA1NiAxNS41MzY3IDExLjU4NTIgMTYuMjAxNSAxMS43ODM2QzE1Ljk1NiAxMi4yODI0IDE1LjU3NjMgMTIuNzAzIDE1LjEwNDkgMTIuOTk3OUMxNC42MzM2IDEzLjI5MjkgMTQuMDg5NCAxMy40NTA1IDEzLjUzMzQgMTMuNDUzMkgxMC41NDRDOS40MzcyNiAxMy40NTcxIDguMzcxNjMgMTMuODcyNyA3LjU1NDUxIDE0LjYxOTFWNy4zOTgwOUM4LjQ2MTg0IDcuMjEyODggOS4yNjgwOCA2LjY5NzM3IDkuODE2OTIgNS45NTE1MUMxMC4zNjU4IDUuMjA1NjUgMTAuNjE4MSA0LjI4MjU2IDEwLjUyNSAzLjM2MTIxQzEwLjQzMTkgMi40Mzk4NyAxMC4wMDAxIDEuNTg1OSA5LjMxMzE2IDAuOTY0ODczQzguNjI2MjQgMC4zNDM4NDUgNy43MzMxOSAwIDYuODA3MTYgMEM1Ljg4MTEyIDAgNC45ODgwNyAwLjM0Mzg0NSA0LjMwMTE0IDAuOTY0ODczQzMuNjE0MjIgMS41ODU5IDMuMTgyMzYgMi40Mzk4NyAzLjA4OTI4IDMuMzYxMjFDMi45OTYyIDQuMjgyNTYgMy4yNDg1NSA1LjIwNTY1IDMuNzk3MzkgNS45NTE1MUM0LjM0NjIzIDYuNjk3MzcgNS4xNTI0NyA3LjIxMjg4IDYuMDU5OCA3LjM5ODA5VjE2LjUxNTlDNS4xNTQxOCAxNi42ODkxIDQuMzQzMjMgMTcuMTg3NyAzLjc3OTkzIDE3LjkxNzZDMy4yMTY2MyAxOC42NDc2IDIuOTM5OTIgMTkuNTU4NSAzLjAwMTk3IDIwLjQ3ODVDMy4wNjQwMyAyMS4zOTg0IDMuNDYwNTcgMjIuMjYzOSA0LjExNjggMjIuOTExNUM0Ljc3MzAzIDIzLjU1OTIgNS42NDM2IDIzLjk0NDQgNi41NjQyNyAyMy45OTQ0QzcuNDg0OTYgMjQuMDQ0NSA4LjM5MjExIDIzLjc1NTggOS4xMTQ2NCAyMy4xODNDOS44MzcxOCAyMi42MTAyIDEwLjMyNTEgMjEuNzkyOCAxMC40ODY1IDIwLjg4NUMxMC42NDc4IDE5Ljk3NzEgMTAuNDcxNCAxOS4wNDE3IDkuOTkwNDggMTguMjU1QzkuNTA5NTcgMTcuNDY4MyA4Ljc1NzQxIDE2Ljg4NDggNy44NzU4OCAxNi42MTQ1QzguMTIxNzYgMTYuMTE2MiA4LjUwMTY3IDE1LjY5NjMgOC45NzI5NiAxNS40MDE5QzkuNDQ0MjYgMTUuMTA3NCA5Ljk4ODI3IDE0Ljk1MDMgMTAuNTQ0IDE0Ljk0NzlIMTMuNTMzNEMxNC40NjYxIDE0Ljk0MzYgMTUuMzc0MiAxNC42NDg2IDE2LjEzMTMgMTQuMTAzOUMxNi44ODg0IDEzLjU1OTIgMTcuNDU2OCAxMi43OTIgMTcuNzU3NSAxMS45MDkxQzE4LjY1MzQgMTEuNzkxNCAxOS40NzYzIDExLjM1MjggMjAuMDczOCAxMC42NzQ4QzIwLjY3MTMgOS45OTY4IDIxLjAwMjggOS4xMjUzMyAyMS4wMDcgOC4yMjE2OFpNNC41NjUwOCAzLjczNzUyQzQuNTY1MDggMy4yOTQwOCA0LjY5NjU3IDIuODYwNiA0Ljk0MjkzIDIuNDkxOUM1LjE4OTMgMi4xMjMxOSA1LjUzOTQ3IDEuODM1ODEgNS45NDkxNSAxLjY2NjExQzYuMzU4ODQgMS40OTY0MiA2LjgwOTY1IDEuNDUyMDIgNy4yNDQ1NiAxLjUzODU0QzcuNjc5NDggMS42MjUwNCA4LjA3ODk4IDEuODM4NTcgOC4zOTI1NCAyLjE1MjE0QzguNzA2MTEgMi40NjU3IDguOTE5NjQgMi44NjUyIDkuMDA2MTUgMy4zMDAxMkM5LjA5MjY2IDMuNzM1MDQgOS4wNDgyNyA0LjE4NTg1IDguODc4NTcgNC41OTU1M0M4LjcwODg3IDUuMDA1MjEgOC40MjE0OSA1LjM1NTM5IDguMDUyNzggNS42MDE3NUM3LjY4NDA4IDUuODQ4MTEgNy4yNTA2IDUuOTc5NiA2LjgwNzE2IDUuOTc5NkM2LjIxMjUyIDUuOTc5NiA1LjY0MjI0IDUuNzQzMzkgNS4yMjE3NyA1LjMyMjkxQzQuODAxMjkgNC45MDI0NSA0LjU2NTA4IDQuMzMyMTYgNC41NjUwOCAzLjczNzUyWk05LjA0OTIzIDIwLjE3OTRDOS4wNDkyMyAyMC42MjI5IDguOTE3NzQgMjEuMDU2MyA4LjY3MTM4IDIxLjQyNUM4LjQyNTAxIDIxLjc5MzcgOC4wNzQ4NSAyMi4wODExIDcuNjY1MTYgMjIuMjUwOEM3LjI1NTQ3IDIyLjQyMDUgNi44MDQ2NiAyMi40NjQ5IDYuMzY5NzUgMjIuMzc4NEM1LjkzNDgzIDIyLjI5MiA1LjUzNTMzIDIyLjA3ODQgNS4yMjE3NyAyMS43NjQ4QzQuOTA4MjEgMjEuNDUxMiA0LjY5NDY3IDIxLjA1MTcgNC42MDgxNiAyMC42MTY5QzQuNTIxNjUgMjAuMTgxOSA0LjU2NjA1IDE5LjczMTEgNC43MzU3NSAxOS4zMjE0QzQuOTA1NDUgMTguOTExNyA1LjE5MjgyIDE4LjU2MTUgNS41NjE1MyAxOC4zMTUyQzUuOTMwMjMgMTguMDY4OSA2LjM2MzcxIDE3LjkzNzMgNi44MDcxNiAxNy45MzczQzcuNDAxNzkgMTcuOTM3MyA3Ljk3MjA3IDE4LjE3MzYgOC4zOTI1NCAxOC41OTRDOC44MTMwMiAxOS4wMTQ1IDkuMDQ5MjMgMTkuNTg0OCA5LjA0OTIzIDIwLjE3OTRaTTE3LjI3MDIgMTAuNDYzOEMxNi44MjY3IDEwLjQ2MzggMTYuMzkzMyAxMC4zMzIyIDE2LjAyNDYgMTAuMDg1OUMxNS42NTU5IDkuODM5NTQgMTUuMzY4NSA5LjQ4OTM3IDE1LjE5ODggOS4wNzk2OUMxNS4wMjkxIDguNjcgMTQuOTg0NyA4LjIxOTIgMTUuMDcxMiA3Ljc4NDI3QzE1LjE1NzYgNy4zNDkzNSAxNS4zNzEyIDYuOTQ5ODUgMTUuNjg0OCA2LjYzNjI5QzE1Ljk5ODQgNi4zMjI3MyAxNi4zOTc5IDYuMTA5MTkgMTYuODMyNyA2LjAyMjY4QzE3LjI2NzcgNS45MzYxNyAxNy43MTg1IDUuOTgwNTggMTguMTI4MSA2LjE1MDI3QzE4LjUzNzkgNi4zMTk5NyAxOC44ODgxIDYuNjA3MzQgMTkuMTM0NCA2Ljk3NjA1QzE5LjM4MDcgNy4zNDQ3NiAxOS41MTIzIDcuNzc4MjMgMTkuNTEyMyA4LjIyMTY4QzE5LjUxMjMgOC44MTYzMiAxOS4yNzYgOS4zODY2IDE4Ljg1NTYgOS44MDcwNkMxOC40MzUxIDEwLjIyNzUgMTcuODY0OCAxMC40NjM4IDE3LjI3MDIgMTAuNDYzOFoiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg=="
}

export class GitPlugin extends ViewPlugin {

  constructor() {

    super(profile)
  }

  onDeactivation(): void {
    this.call('fileDecorator', 'clearFileDecorators')
    this.call('manager', 'activatePlugin', 'dgitApi')
  }

  async open(panel:string) {
    this.emit('openPanel', panel)
  }

  render() {
    return <div id='gitTab'><GitUI plugin={this} /></div>
  }

}
