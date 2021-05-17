import { Command } from "https://deno.land/x/cliffy/command/mod.ts";

await new Command();
await new Command()
  .name("spork-cli")
  .version("0.1.0")
  .description("Command line interface for spork.")
  .command("add <program:string>", "Add a program.")
  .action((options: any, program: string) => {
    console.log(`add command called on ${program}`);
  })
  .command("rename <old_name:string> <new_name:string>", "Rename a program.")
  .action((options: any, oldName: string, newName: string) => {
    console.log(`rename command called on ${oldName} to ${newName}`);
  })
  .command("run <program:string>", "Run a program on IDE.")
  .action((options: any, program: string) => {
    console.log(`run command called on ${program}`);
  })
  .command("stop", "Stop the running program.")
  .action((options: any) => {
    console.log(`stop command called`);
  })
  .parse(Deno.args);
