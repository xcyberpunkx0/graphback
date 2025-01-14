import yargs from 'yargs';
import { commandRoot } from '../commandRoot'
import { init } from '../helpers'

type Params = { name?: string, templateName?: string, templateUrl: string }

export const command = 'init <name>'

export const desc = 'Create project'

// tslint:disable-next-line: typedef
export const builder = (args: yargs.Argv) => {
  args.positional('name', {
    describe: 'Project name',
    type: 'string',
  })
  args.option('templateName', {
    describe: 'Name of the predefined template',
    type: 'string'
  })
  args.option('templateUrl', {
    describe: 'GitHub URL of the template. For example (http://github.com/wtrocki/graphback-hapijs#master)',
    type: 'string'
  })
}

export async function handler({ name, templateName, templateUrl }: Params) {
  await init(name, templateName, templateUrl, commandRoot);
}