type ErrorCode =
  | "invalid-cpf"
  | "invalid-document-type"
  | "invalid-cnpj"
  | "document-number-required"
  | "document-already-exists"
  | "email-already-exist"
  | "client-already-exists"
  | "external-error"
  | "invalid-cnj"
  | "lawsuit-invalid-class"
  | "invalid-phase"
  | "invalid-qualification"
  | "oab-already-exists"
  | "defendant-already-exists";

export function generateFriendlyMessage(errorCode: ErrorCode): string {
  switch (errorCode) {
    case "invalid-cpf":
      return "CPF inválido.";
    case "invalid-document-type":
      return "Tipo de documento inválido.";
    case "invalid-cnpj":
      return "CNPJ inválido.";
    case "document-number-required":
      return "Número do documento é obrigatório.";
    case "document-already-exists":
      return "Documento já existe.";
    case "email-already-exist":
      return "Email já existe.";
    case "client-already-exists":
      return "Cliente já existe.";
    case "external-error":
      return "Erro externo.";
    case "invalid-cnj":
      return "CNJ inválido.";
    case "lawsuit-invalid-class":
      return "Classe de processo inválida.";
    case "invalid-phase":
      return "Fase inválida.";
    case "invalid-qualification":
      return "Qualificação inválida.";
    case "oab-already-exists":
      return "OAB já existe.";
    case "defendant-already-exists":
      return "Réu já existe.";
    default:
      return "Código de erro desconhecido.";
  }
}
