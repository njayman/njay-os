import { Box, Button, InputBase, Paper } from "@mui/material";
import { useState } from "react";

const brakets = ["[", "]", "{", "}", "(", ")"];

const numerics = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "00"];

const symbols = ["+", "-", "x", "/"];

const replaceChars = (str: string) => {
  return str
    .replace(/,/g, "")
    .replace(/\[/g, "(")
    .replace(/\]/g, ")")
    .replace(/\{/g, "(")
    .replace(/\}/g, ")")
    .replace(/x/g, "*");
};

const Calculator = () => {
  const [statement, setStatement] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const [resultGenerated, setResultGenerated] = useState<boolean>(false);

  const addToStatement = (input: string) => {
    if (resultGenerated) {
      setStatement([input]);
      setResultGenerated(false);

      return;
    }

    setStatement((previousStatement) => [...previousStatement, input]);
  };

  const deleteStatement = () => {
    if (statement.length === 0) {
      return;
    }

    if (resultGenerated) {
      setResultGenerated(false);
    }

    setResult("");
    setStatement((previousStatement) => previousStatement.slice(0, -1));
  };

  const clearStatement = () => {
    setStatement([]);
    setResult("");
    setResultGenerated(false);
  };

  const calculate = () => {
    if (statement.length === 0) {
      return;
    }

    try {
      const mathStatement = replaceChars(statement.join());
      const calculation = eval(mathStatement) as number;
      setResult(String(calculation));
      setResultGenerated(true);
    } catch (_error) {
      alert("wrong calculation statement");
    }
  };

  return (
    <Box sx={{ width: "400px" }}>
      <Paper>
        <InputBase value={statement.join(" ")} readOnly sx={{ p: 1 }} />
        <InputBase
          value={result}
          readOnly
          sx={{ px: 1, paddingBottom: 1, fontSize: 25 }}
        />
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{ width: "20px" }} onClick={clearStatement}>
          AC
        </Button>
        <Button sx={{ width: "20px" }} onClick={deleteStatement}>
          Del
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {brakets.map((bracket) => (
          <Button
            sx={{ width: "10px" }}
            onClick={() => {
              addToStatement(bracket);
            }}
            key={bracket}
          >
            {bracket}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 1,
            width: "100%",
          }}
        >
          {numerics.map((numeric) => (
            <Button
              sx={{ width: "20px" }}
              onClick={() => {
                addToStatement(numeric);
              }}
              key={numeric}
            >
              {numeric}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {symbols.map((symbol) => (
            <Button
              sx={{ width: "20px" }}
              onClick={() => {
                addToStatement(symbol);
              }}
              key={symbol}
            >
              {symbol}
            </Button>
          ))}
          <Button sx={{ width: "20px" }} onClick={calculate}>
            =
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
